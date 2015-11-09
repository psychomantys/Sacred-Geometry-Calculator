#!/bin/bash

FILES="platforms/android/res/drawable-hdpi/icon.png platforms/android/res/drawable-ldpi/icon.png platforms/android/res/drawable-mdpi/icon.png platforms/android/res/drawable/icon.png platforms/android/res/drawable-xhdpi/icon.png"

for x in ${FILES} ; do
	cp www/img/logo.png "${x}"
done

