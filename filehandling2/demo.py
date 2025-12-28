file = open("condingal.txt", "r")
file2 = open("codingalupdated.txt", "w+")

for i in file.readlines():
    if i[:6]:
        if i[:6] == "coding":
            file2.write(i)


content = file2.read()
print(content) 
file.close()
file2.close()       
    