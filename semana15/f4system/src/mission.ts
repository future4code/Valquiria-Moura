export abstract class Mission {
    public teacherList: string [] = []
    public studentsList: string [] = []
    
    constructor(
        public startDate: string,
        public endDate: string
        ) {}
  }