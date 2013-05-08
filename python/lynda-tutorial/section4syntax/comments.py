#!/usr/bin/python3
# comments.py is a file about comments obviously. But why not throw in some opinions?
# Juan is awesome
# Actually the above is a fact

def main():
    for n in primes(): # generate a list of prime numbers
        if n > 100: break
        print(n)

def isprime(n):
    if n == 1: # one is never prime 
        return False
    for x in range(2, n):
        if n % x == 0: 
            return False  # found a divisor, not prime
        else:
            return True

def primes(n = 1):
    while(True):
        if isprime(n): yield n  # yield makes this a generator
        n += 1

if __name__ == "__main__": main()
