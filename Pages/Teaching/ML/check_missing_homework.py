import os
import random

students = open('students.txt', 'r').readlines()
homework = open('homework.txt', 'r').readlines()

groups = ['A1','A2','A3']
groups_index = []
start_index = 0
continue_while = True
while continue_while:
    for idx, s in enumerate(students[start_index:]):
        if s.strip() == '':
            continue_while = True
            break
        else:
            continue_while = False
    end_index = start_index + idx
    groups_index.append((start_index,end_index))
    start_index = end_index + 1

all_students_set = set([s.strip().lower() for s in students])
submitted_students_set = set([h.strip().lower() for h in homework if h != ''])

not_submitted_students = list(all_students_set - submitted_students_set)
not_submitted_students.sort()
print("Students who have not submitted their homework:")
for student_id in not_submitted_students:
    print(student_id)
    # student_og_idx =  list(all_students_set).index(student_id)
    # for group_idx in groups_index:
    #     if student_og_idx >= group_idx[0] and student_og_idx <= group_idx[1]:
    #         print(student_id, groups[groups_index.index(group_idx)])
    #         break

print("\n\nRandomly selected 15 students to check:")
random_check = random.sample(list(submitted_students_set), 15)
for student_id in random_check:
    print(student_id)
    




# Check to see if all students have submitted their homework
# for student in students:
#     student = student.strip()
#     if student not in [ h.strip() for h in homework if h != '']:
#         print(student)