file = open('codingal.txt', 'r')
print("file in read mode")
content = file.read()
print(content)
file.close()  


filewrite=open('codingal.txt', 'w')
content2 = filewrite.write("i am a good boy and my teacher mr rudraksh is very nice to me\n")
print(content2)
filewrite.close()


fileappend = open('codingal.txt', 'a')
fileappend.write("it;s a rainy day\n")
print ( fileappend)
print("appended successfully")
fileappend.close()


