#!/bin/bash

if test "$#" -ne 1
then
	echo Usage: fin
	exit 1
fi

#filename
IN="$1"
BASE=$(echo "$IN" | awk -F'.' '{ print $1 }')
BILLED_TIMES="$BASE"_billed.txt
TEMP=$(mktemp)

#extract billed times
cat "$IN" | grep --line-buffered REPORT | while read line  
	do echo "$line" | awk -F'Billed Duration: ' '{ print $2 }' | cut -d' ' -f1 
	done >> "$TEMP"

#group by entity
> "$BILLED_TIMES"	
cat "$TEMP" | sort | uniq -c >> "$BILLED_TIMES"

> "$BASE"_billed.csv
cat "$BILLED_TIMES" | while read line
	do echo "$line" | awk -F' ' '{ print $1, $2 }'  | sed -e 's/ /\;/'  >> "$BASE"_billed.csv
	done

echo Done
echo CREATED: "$BILLED_TIMES" ___AND___ "$BASE"_billed.csv
