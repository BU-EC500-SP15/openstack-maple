# Maple in OpenDaylight
Maple in OpenDaylight

Mentor: Andreas Voellmy

Team Members: Cody Doucette, Yao Xiao, Guanchen Zhang, Shigang Zhu

## Vision and Goals Of The Project

OpenDaylight (ODL) has emerged as one of the leading Software-Defined Network controllers. It is supported by a large number of major vendors (Brocade, Cisco, Citrix, Dell, HP, IBM, Intel, …). This platform is gaining traction and now supports a variety of applications including applications for network virtualization and cloud (OpenStack).

One key limitation in ODL today is the lack of modularity: many important network applications do not play nicely together. Typically, these ODL network applications assume full control over network element configurations and hence do not compose well with other applications.

Recent work in SDN provides network programming abstractions that promise to make it possible to write applications in a modular way, with components written independently and then combined at a semantic -- rather than configuration -- level. In particular, the Maple programming abstraction, allows programs written in ordinary programming language to be transparently deployed onto high-performance switching hardware through a dynamic translation of the program into the OpenFlow switch abstraction.

The goals of this project are to:
 * Port the Maple programming abstraction to the OpenDaylight (ODL) controller
   platform, in collaboration with a tema at Cisco Systems and Yale University, and
 * build a collection of sample applications for ODL that demonstrate how to use
   the Maple programming model in ODL. 

## Users/Personas Of The Project
The key consumers of the project are the ODL developer community and commercial
users of the ODL controller.

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
This section provides a high-level outline of the solution.

Global Architectural Structure Of the Project:
This section provides a high-level architecture or a conceptual diagram showing
the scope of the solution. If wireframes or visuals have already been done, this
section could also be used to show how the intended solution will look. This
section also provides a walkthrough explanation of the architectural structure.
 * Maple library that includes the following
   * Packet abstract class
   * MapleFunction base class, providing overridable functions, and which
     implements tracing execution.
   * MapleVariable, MapleSet, and MapleMap classes
   * TraceTree class, with methods to add traces, remove traces, and compile to
     flow table.
   * FlowManager, that provides a translation between the flow rules output from
     TraceTree and writes to ODL's component responsible for managing flow rules
     on devices.

Design Implications and Discussion:
This section discusses the implications and reasons of the design decisions made during the global architecture design.

## Acceptance Criteria
The minimum acceptance criteria are a basic port of Maple that may be
inefficient (e.g. may not provide optimized compilation, or precise invalidations), but which faithfully
executes simple Maple programs listed in the project goals.  Stretch goals will
be to smoothly integrate with ODL's MD-SAL to provide access to a Maple
program's state via the MD-SAL methods (e.g. REST APIs) and stores the system
state in the persistent storage of ODL.

## Release Planning
Release planning section describes how the project will deliver incremental sets
of features and functions in a series of releases to completion. Identification
of user stories associated with iterations that will ease/guide sprint planning
sessions is encouraged. Higher level details for the first iteration is
expected.

 * Release #1 (due by Week 5): Basic infrastructure.
   * Maple programming API which handles all packets at the controller with no
     rule generation or tracing.
   * Simple learning switch example and port-based security.
   * Demonstration of running system against a Mininet-simulated network.

 * Release #2 (due by Week 7): Basic tracing, trace tree, and compilation.
   * Collect execution traces.
   * Build trace tree with only V and L nodes (see Maple paper for details on terminology).
   * Simple, naive compilation of trace tree to flow table.
   * Push updated flow table to ODL's flow manager.
   * Only works with examples whose system state is constant (e.g. fixed host
     location tables)
   
 * Release #3 (due by Week 9): System state
   * Only cache execution trace if system state components are unchanged.
   * When system state component is changed, clear the trace tree and remove
     flow table entries.
   * Support editing of state components via REST or via ODL's MD-SAL.
   * Support learning switch and port-based security examples.
   
 * Release #4 (due by Week 11): ACLs
   * Support assertions and T nodes (see Maple papers for terminology)
   * Improved compilation with T nodes.
   * Trace minimization via BDD library.

 * Release #5 (due by Week 13):


