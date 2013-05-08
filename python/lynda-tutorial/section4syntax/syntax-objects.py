#!/usr/bin/python3

class Egg:
    def __init__(self, kind = "fried"):
        self.kind = kind

    def whatKind(self):
        return self.kind

def main():
    fried = Egg()
    scrambled = Egg('scrambled')
    print(scrambled.whatKind())

if __name__ == "__main__": main()

