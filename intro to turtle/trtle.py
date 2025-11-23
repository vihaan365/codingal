import turtle

turtle.Screen().bgcolor("lightblue")
turtle.Screen().setup(width=800, height=600)

turtle.title("demon slayer corps ")

t = turtle.Turtle()
t.color("red")
t.speed(1)
for i in range(4):
    t.forward(100)
    t.left(90)
    i+=1
