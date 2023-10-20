import os

students = open('students.txt', 'r').readlines()
homework = open('homework.txt', 'r').readlines()

all_students_set = set([s.strip().lower() for s in students])
submitted_students_set = set([h.strip().lower() for h in homework if h != ''])

not_submitted_students = all_students_set - submitted_students_set

for student_id in not_submitted_students:
    print(student_id)







# Check to see if all students have submitted their homework
# for student in students:
#     student = student.strip()
#     if student not in [ h.strip() for h in homework if h != '']:
#         print(student)