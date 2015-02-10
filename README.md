# openstack-maple
Maple in OpenDaylight

Mentor: Andreas Voellmy

Team Members: Cody Doucette, Yao Xiao, Guanchen Zhang, Shigang Zhu

## Vision and Goals Of The Project
The goals of this project are to:
 * collaborate with a team at Cisco Systems and Yale University to bring the
   Maple programming abstraction to the OpenDaylight (ODL) controller platform, and
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

