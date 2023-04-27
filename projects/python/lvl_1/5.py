# WAP to convert temperature from Farenheit to Centigrade. C=(F - 32)*5/9

F = int(input("Enter temperature in Farenheit: "))
C = (F - 32)*5/9

print(str(F) + " degrees Farenheit = " + str(C) + " degrees Centigrade")