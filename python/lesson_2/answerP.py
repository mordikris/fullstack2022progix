#  Q1  #
#    Printing numbers 1 to 10 using a for loop:

for i in range(1, 11):
    print(i)

    #  Q2  #
#    Calculating the sum of numbers 1 to 100 using a for loop:

sum = 0
for i in range(1, 101):
    sum += i
print(sum, i)

#  Q3  #
#    Printing all even numbers from 1 to 20 using a for loop:

for i in range(0, 21):
    if not i%2:
         print(i)

    #  Q4  #
#    Printing the multiplication table of a given number using a for loop:

number = 6
for i in range(1, 20):
    dubble = number * i
    print(dubble)

    #  Q5  #
#    Printing the elements of a list using a for loop:

list = ["mordechay", "avigail", "shoshana"]
for i in list:
    print("the name that choose is : ",i)

    # Harder Q'z

    #    [Q1]    #
#  Printing the first n fibonacci numbers using a for loop:
usernumber = int(input("Please write down the number of times you want Fibonacci to show you"))
first_number = 0
second_number = 1
if usernumber <= 0:
    print("the number you choose is" , first_number)
else:
    print(first_number,second_number,end=" ")
    for i in range(2,usernumber):
        next_number = first_number + second_number
        print(next_number,end=" ")
        first_number = second_number
        second_number = next_number


    #    [Q2]    #
# Printing the prime numbers between a given range using a for loop:

for i in range(1, 192, 10):
    print(i)

    #   [Q3]   *
#  {fix the bugs!} Printing the elements of a nested list using a for loop:

numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
for lst in numbers:
    for numbers in lst:
        print(lst)

        #   [Q4]   #
# { fix the bugs! } Flattening a nested list using a for loop:


numbers = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat_list = []
for lst in numbers:
    for numbers in lst:
        flat_list.append(numbers)
print(flat_list)


# [Q5] #
# Printing the frequency of each element in a list using a for loop:


numbers = [1, 2, 3, 4, 2, 1, 4, 4, 5, 1]
freq = {}
for i in numbers:
    if i in freq:
      freq[i] += 1
    else:
      freq[i] = 1
print(freq)