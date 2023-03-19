import random

num = random.randint(0,10)

guessnum = input("enter a number between 0 - 10 :")
if int(guessnum) == num:
    print(" u r corect hulala")
else:
    if int(guessnum)<= num or int(guessnum)>=num:
        print("just left",num %int(guessnum))
    print("u r not good boooooz") 

print("allmost so close just" ,)
print("the number wes :" , num)
    
    # Completed #