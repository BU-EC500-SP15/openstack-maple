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
 * Execution trace (aka trace) minimization;
 * Build trace tree using sequence of traces;
 * Compile trace tree to flow tables;
 * Push flow tables to ODL flow manager.

## Solution Concept
This section provides a high-level outline of the solution.

Global Architectural Structure Of the Project:
This section provides a high-level architecture or a conceptual diagram showing the scope of the solution. If wireframes or visuals have already been done, this section could also be used to show how the intended solution will look. This section also provides a walkthrough explanation of the architectural structure.

Design Implications and Discussion:
This section discusses the implications and reasons of the design decisions made during the global architecture design.

## Acceptance Criteria
This section discusses the minimum acceptance criteria at the end of the project and stretch goals.

## Release Planning
Release planning section describes how the project will deliver incremental sets of features and functions in a series of releases to completion. Identification of user stories associated with iterations that will ease/guide sprint planning sessions is encouraged. Higher level details for the first iteration is expected.

