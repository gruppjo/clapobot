# clapotbot prototype

## Setup on RaspberryPi

- install Raspbian https://www.raspberrypi.org/documentation/installation/installing-images/
- install via NOOBS (New out of box software) https://www.raspberrypi.org/documentation/installation/noobs.md
- connect to raspbian via ssh
https://github.com/nebrius/raspi-io/wiki/Getting-a-Raspberry-Pi-ready-for-NodeBots 
- install nvm https://github.com/creationix/nvm#install-script
- nvm version location https://github.com/creationix/nvm#usage 


## Enable UART
- Neue Konfig für Raspbian 8: https://raspberry.tips/raspberrypi-einsteiger/uart-auf-dem-raspberrypi-nutzen/
- find device `dmesg | grep tty` for terminal

## RFID Reader/Writer

- manual http://www.b2cqshop.com/best/Q004151028-Manual.pdf

- node package https://github.com/techniq/node-pn532
- serialport dependency
https://github.com/EmergingTechnologyAdvisors/node-serialport

