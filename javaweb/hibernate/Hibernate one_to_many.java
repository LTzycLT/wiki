public class Group {
@OneToMany(mappedBy="group",targetEntity=Student.class)
private Set<Student> books = new HashSet<Student>();
}
public class Student {
@ManyToOne
private Group group;
}