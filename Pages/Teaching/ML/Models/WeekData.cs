namespace cristian.simionescu.me;

public class WeekData
{
    public int WeekNumber { get; set; }
    public string UploadFormLink { get; set; }
    public string Homework { get; set; }
    public string Deadline { get; set; }
    public string AdditionalInformation { get; set; } = "";
    public List<StudentGroup> StudentGroups { get; set; }
}
