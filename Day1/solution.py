def read_data(file):
    list1 = [] #left 
    list2 = [] #right
    with open(file,'r') as file_data: #data.txt containing the input given
        for line in file_data.readlines():
            a,b = line.split() # each line contains two values seperated by space
            list1.append(int(a))
            list2.append(int(b))  
    return list1,list2

def calculate_distance(l1:list,l2:list): #added type annotations so that VSC gives intellisense 
    l1.sort()
    l2.sort()
    return (sum(abs(i-k) for i,k in zip(l1,l2))) #length of l1 and l2 is equal always

def calculate_similarity_score(l1:list,l2:list): 
    '''l1 - left list\n
       l2 - right list'''
    score = {}
    for i in l2:
        if i in score:
                score[i] += 1
        else:
            score[i] = 1 #initialy occurance is 1
    return sum(score[i]*i for i in l1 if score.get(i)) #get return None when element not in score which is falsy
list1,list2 = read_data('./Day1/data.txt')

print(f"Result for Part I:\n{calculate_distance(list1,list2)}")

print(f"Result for Part II:\n{calculate_similarity_score(list1,list2)}")


