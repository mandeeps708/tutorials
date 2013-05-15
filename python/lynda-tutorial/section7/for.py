#!/usr/bin/python3

def main():
    fh = open('lines.txt')
    for index, line in enumerate(fh.readlines()):
        print(line, end='')

if __name__ == "__main__": main()
