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

## RFID Reader/Writer PN532

- manual http://www.b2cqshop.com/best/Q004151028-Manual.pdf

- node package https://github.com/techniq/node-pn532
- serialport dependency https://github.com/EmergingTechnologyAdvisors/node-serialport

## Connection Instructions

http://www.schnatterente.net/technik/nfc-raspberry-pi-pn532-breakout-board
http://www.schnatterente.net/img/articles/pn532/raspberry-pi-spi-uart-i2c.png
```
PN532-Breakout-Board via UART an den Raspberry Pi anschließenDas Hardware-Setup für UART ist ähnlich simpel, wie das für SPI. Beide Jumper werden auf "Off" (="GND") gestellt. Mit vier Jumperkabeln verbindet man die beiden Platinen:
RPi GPIO Pin 2 (5V) ↔ PN532 5V
RPi GPIO Pin 6 (GND) ↔ PN532 GND
RPi GPIO Pin 14 (TXD) ↔ PN532 SSEL/SCL/RX
RPi GPIO Pin 15 (RXD) ↔ PN532 MOSI/SDA/TX
Software-Konfiguration: PN532 via UARTDie Verkabelung wäre also schon mal erledigt. Damit man aber eine UART-Datenverbindung mit dem NFC-Reader herstellen kann, muss man die betreffenden Pins noch softwareseitig freilegen. Denn unter Raspbian sind diese in der Regel schon mit einer Linux-Konsole belegt.

Um diese abzuschalten (und die UART-Pins somit verfügbar zu machen) muss man Folgendes tun:
In der Datei /boot/cmdline.txt entfernt man alle Einträge und Parameter, in denen "ttyAMA0" vorkommt.
Beispiel: 
dwc_otg.lpm_enable=0 console=ttyAMA0,115200 kgdboc=ttyAMA0,115200 console=tty1 $
wird zu
dwc_otg.lpm_enable=0 console=tty1 $
In der Datei /etc/inittab kommentiert man die folgende Zeile aus (indem man ein #-Zeichen an den Zeilenanfang schreibt):
 T0:23:respawn:/sbin/getty -L ttyAMA0 115200 vt100
Der Raspberry Pi muss neu gestartet werden.
```

## Tower Pro SG90 ansteuern
https://github.com/jperkin/node-rpio
http://www.toptechboy.com/raspberry-pi/raspberry-pi-lesson-28-controlling-a-servo-on-raspberry-pi-with-python/
http://www.micropik.com/PDF/SG90Servo.pdf
