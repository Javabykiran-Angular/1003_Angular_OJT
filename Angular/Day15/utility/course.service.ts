export class CourseService{
    private course:string[]=["core Java",'HTML,CSS,JS','Adavanced Java','Spring Core','Spring Boot','Angular','Docker','Jenkings','AWS'];


    getCourse(){
        return (this.course);
    }

}