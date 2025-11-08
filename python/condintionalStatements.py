'''
if statement
'''
age = 18
if age >= 18:
    print("You can vote.")


'''
if-else statement
'''
age = 16
if age >= 18:
    print("You are an adult.")

else:
    print("You are a child.")


'''
if-elif-else statement
'''
marks = 85
if marks >= 90:
    print("Grade A")
elif marks >= 75:
    print("Grade B")
elif marks >= 60:
    print("Grade C")
else:
    print("Grade D")

'''
nested if statement
'''
club = "real madrid"
if club == "real madrid":
    country = "france"
    if country == "spain":
        print("Real Madrid is a Spanish club.")
    else:
        print("Real Madrid is not a Spanish club.")
else:
    print("Unknown club.")

'''
Datetime module
'''
import datetime
current=datetime.datetime.now()
print(current)

