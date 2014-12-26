public class Student {
	@ManyToMany
	@JoinTable(name="T_sg",joinColumns=@JoinColumn(name="student")
	,inverseJoinColumns=@JoinColumn(name="groupx"))
	private Set<Group> groups = new HashSet<Group>();
}
public class Group {
	@ManyToMany(mappedBy="groups",targetEntity=Student.class)
	private Set<Student> students = new HashSet<Student>();
}
