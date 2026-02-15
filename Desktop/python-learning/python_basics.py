# 1. Variables
name = "Your Name"
age = 21
branch = "AI & ML"

print("Name:", name)
print("Age:", age)
print("Branch:", branch)

# 2. If Else Condition
marks = 85
if marks >= 90:
    print("Grade: A+")
elif marks >= 75:
    print("Grade: A")
elif marks >= 60:
    print("Grade: B")
else:
    print("Grade: C")

# 3. For Loop
print("\nCounting from 1 to 5:")
for i in range(1, 6):
    print(i)

# 4. Function
def greet(person_name):
    return "Hello " + person_name + "! Welcome to Python."

print("\n" + greet("Your Name"))
