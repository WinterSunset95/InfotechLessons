# WAP to print the total number of seconds in a given time

hours = int(input("Enter hours: "))
mins = int(input("Enter minutes: "))
secs = int(input("Enter seconds: "))

total_secs = hours*60*60 + mins*60 + secs

print("Total seconds: ", total_secs)