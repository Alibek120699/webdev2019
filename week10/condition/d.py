def sign(n):
	if n>0:
		return 1
	elif n<0:
		return -1
	return 0

n = int(input())
print(sign(n))