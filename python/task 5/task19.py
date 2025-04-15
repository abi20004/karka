y=[23,4,-6,23,-9,21,3,-45,-8]
pos=[]
neg=[]
for i in range(len(y)):
    if(y[i]<0):
      neg.append(y[i])
    else:
        pos.append(y[i])
print(neg)
print(pos)