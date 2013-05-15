#!/usr/bin/python3

def main():
    x = [1, 2, 3]
    x.append(5)
    x.insert(0,7) #the first number is the position where it will be inserted
    print(type(x), x)

if __name__ == "__main__": main()
