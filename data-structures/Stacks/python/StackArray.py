# push and pop are both o(1) in a stack
class Stack():
    def __init__(self):
        self.list = []
    def push(self,value):
        self.list.append(value)
    def pop(self):
        if(len(self.list) == 0):
            return "Pop from empty stack"
        return self.list.pop()
       
