# Maple in OpenDaylight
Maple in OpenDaylight

Mentor: Andreas Voellmy

Team Members: Cody Doucette, Yao Xiao, Guanchen Zhang, Shigang Zhu

## Vision and Goals Of The Project

[OpenDaylight (ODL)](http://www.opendaylight.org) has emerged as one of the leading Software-Defined Network controllers. The goal of OpenDayLight is to promote and accelerate an community-led and industry-supported open source framework. To allow the industry to focus on the application parts in stead of struggling to design different SDN controllers. Therefore, it is supported by a large number of major vendors (Brocade, Cisco, Citrix, Dell, HP, IBM, Intel, …). This platform is gaining traction and now supports a variety of applications including applications for network virtualization and cloud (OpenStack).

One key limitation in ODL today is the lack of modularity: many important network applications do not play nicely together. Typically, these ODL network applications assume full control over network element configurations and hence do not compose well with other applications.

Recent work in SDN provides network programming abstractions that promise to make it possible to write applications in a modular way, with components written independently and then combined at a semantic -- rather than configuration -- level. In particular, the [Maple programming abstraction](http://haskell.cs.yale.edu/wp-content/uploads/2013/08/comm282-voellmy.pdf), allows programs written in ordinary programming language to be transparently deployed onto high-performance switching hardware through a dynamic translation of the program into the OpenFlow switch abstraction.

The goals of this project are to:
 * Port the Maple programming abstraction to ODL, in collaboration with a team
   at Cisco Systems and Yale University, and
 * build a collection of sample applications for ODL that demonstrate how to use
   the Maple programming model in ODL. 

## Users/Personas Of The Project
The key consumers of the project are the ODL developer community and commercial
users of the ODL controller. Porting Maple to ODL would enable commercial
users to simplify their SDN infrastructures because they will be able to
use a standard programming language to specify their policies and have those
policies implemented in an efficient way. This port will be a key stepping
stone in allowing simpler programming abstractions to be used in SDN.

## Scope and Features Of The Project
Currently, Maple has components written in Java and Haskell. This project will
port the remaining key components of Maple into Java. These include

 * Build trace tree using sequence of traces;
 * Compile trace tree to flow tables;
 * Push flow tables to ODL flow manager.
 * Execution trace (aka trace) minimization;
 * Expose Maple program state via ODL REST/MD-SAL interfaces.

By the end of the project, the following example programs should run on
Maple-in-ODL:
 * Learning switch controller
 * Learning switch controller with port-based security
 * Learning switch controller with ACLs
 * IP forwarding example

## Solution Concept

Global Architectural Structure of the Project:
 
A Maple library that includes the following:

   * `Packet` abstract class.
   * `MapleFunction` base class, providing overridable functions, and which
     implements tracing execution.
   * `MapleVariable`, `MapleSet`, and `MapleMap` classes.
   * `TraceTree` class, with methods to add traces, remove traces, and compile
     to flow table.
   * `FlowManager`, that provides a translation between the flow rules output
     from `TraceTree` and writes to ODL's component responsible for managing
     flow rules on devices.

Design Implications and Discussion:

To bring Maple to ODL, the minimum set of required functionality is
conceptually in the classes listed above, although other supporting
classes may be necessary. The design decisions above -- and the design of
Maple in general -- were made with computational demand in mind. For example,
the trace tree is needed to be able to reuse previous computations and
offload work to switches, which enables algorithmic policies to be
implemented efficiently.

Additionally, porting Maple will require implementing components that
can be continually extended in a modular way, which is a natural fit for a
language that supports inheritance and polymorphism like Java.
For example, this port should of course be able to handle different types
of packets, including protocols that are not currently defined. An abstract
`Packet` class is a perfect for this, since more specific subclasses
can be created at any time and plugged in. The same idea holds for the
`MapleFunction` class, which can be extended (and its methods overridden) to
support new algorithmic policies.

## Acceptance Criteria
The minimum acceptance criterion is a basic port of Maple that may be
inefficient (e.g. may not provide optimized compilation, or precise invalidations), but which faithfully
executes simple Maple programs listed in the project goals. Stretch goals will
be to smoothly integrate with ODL's MD-SAL to provide access to a Maple
program's state via the MD-SAL methods (e.g. REST APIs) and stores the system
state in the persistent storage of ODL.

## Release Planning
Release planning section describes how the project will deliver incremental sets
of features and functions in a series of releases to completion. Identification
of user stories associated with iterations that will ease/guide sprint planning
sessions is encouraged. Higher level details for the first iteration is
expected.

 * Release #1 (due by Week 5  Feb 25): Basic infrastructure.
   * Maple programming API which handles all packets at the controller with no
     rule generation or tracing.
   * Simple learning switch example and port-based security.
   * Demonstration of running system against a Mininet-simulated network.

 * Release #2 (due by Week 7  Mar 11): Basic tracing, trace tree, and compilation.
   * Collect execution traces.
   * Build trace tree with only V and L nodes (see [Maple paper](http://haskell.cs.yale.edu/wp-content/uploads/2013/08/comm282-voellmy.pdf) for details on terminology).
   * Simple, naive compilation of trace tree to flow table.
   * Push updated flow table to ODL's flow manager.
   * Only works with examples whose system state is constant (e.g. fixed host
     location tables)
   
 * Release #3 (due by Week 9  Mar 25): System state
   * Only cache execution trace if system state components are unchanged.
   * When system state component is changed, clear the trace tree and remove
     flow table entries.
   * Support editing of state components via REST or via ODL's MD-SAL.
   * Support learning switch and port-based security examples.
   
 * Release #4 (due by Week 11  Apr 08): ACLs
   * Support assertions and T nodes (see [Maple paper](http://haskell.cs.yale.edu/wp-content/uploads/2013/08/comm282-voellmy.pdf) for terminology)
   * Improved compilation with T nodes.
   * Trace minimization via BDD library.

 * Release #5 (due by Week 13  Apr 22):

## Demo Instructions

    # Clone the repository:
    git clone https://github.com/BU-EC500-SP15/openstack-maple.git
    ...
    
    # Set-up the VM using vagrant and log-in:
    cd openstack-maple/vagrant
    vagrant up
    ...
    vagrant ssh
    ...
    
    # In SSH session, build MapleCore and odlmaple:
    cd MapleCore
    mvn clean install
    ...
    cd ../odlmaple
    mvn clean install
    ...
    
    # In SSH session, start Apache Karaf container for ODL:
    ./distribution/karaf/target/assembly/bin/karaf
    ...
    
    # In a NEW shell, start an SSH session and start Mininet:
    vagrant ssh
    ...
    sudo mn --controller=remote,ip=10.0.2.15 --mac --topo=tree,depth=1,fanout=5
    
    # In Mininet, check the flow tables and ping hosts:
    sh ovs-ofctl dump-flows s1
    ...
    h1 ping h2
    sh ovs-ofctl dump-flows s1
    ...
    pingall
    ...
    sh ovs-ofctl dump-flows s1
