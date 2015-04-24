#!/usr/bin/env bash

# Get Maven from the Maven downloads rather than from ubuntu repositories,
# because Ubuntu package is 3.0.4 and ODL now seems to require 3.1 or later.
wget http://www.eng.lsu.edu/mirrors/apache/maven/maven-3/3.3.1/binaries/apache-maven-3.3.1-bin.tar.gz
tar -xvzf apache-maven-3.3.1-bin.tar.gz
printf "\nPATH=$PATH:/home/vagrant/apache-maven-3.3.1/bin\n" >> /home/vagrant/.profile


# Maple
git clone https://github.com/zhushigang/MapleCore.git
cd /home/vagrant/MapleCore && mvn clean install


git clone -b BUstudent https://github.com/AndreasVoellmy/l2switch.git
cd /home/vagrant/l2switch && mvn clean install
