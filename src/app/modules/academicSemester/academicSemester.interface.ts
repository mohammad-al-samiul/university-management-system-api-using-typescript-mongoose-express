export type TMonths =
  | "January"
  | "February"
  | "March"
  | "April"
  | "May"
  | "June"
  | "July"
  | "August"
  | "September"
  | "October"
  | "November"
  | "December";

export type TAcademicSemesterName = "Autumn" | "Spring" | "Fall";
export type TAcademicSemeterCode = "01" | "02" | "03";

export type TAcademicSemester = {
  name: TAcademicSemester;
  code: TAcademicSemeterCode;
  year: Date;
  startMonth: TMonths;
  endMonth: TMonths;
};
