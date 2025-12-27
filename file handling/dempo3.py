file = open("codingal2.txt", "r")
count = 0
filecontent = file.read()
words = filecontent.split("\n")
print (words)
for i in words:
    if i : 
        count+= 1
print("number of lines in the file:", count)