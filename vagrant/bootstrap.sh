#!/usr/bin/env bash
apt-get update
apt-get install -y python-software-properties
apt-get update
apt-get -y install openjdk-7-jre openjdk-7-jdk
cp /vagrant/java-x86-64.conf /etc/ld.so.conf.d/
ldconfig
apt-get install -y git ant

# mininet
git clone git://github.com/mininet/mininet
/home/vagrant/mininet/util/install.sh -a

# this is for ODL
apt-get -y install build-essential unzip python-dev python-virtualenv 
