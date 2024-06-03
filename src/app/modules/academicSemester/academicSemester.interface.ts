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

export type TAcademicSemesterName = "Autumn" | "Summar" | "Fall";
export type TAcademicSemeterCode = "01" | "02" | "03";

export type TAcademicSemester = {
  name: TAcademicSemester;
  code: TAcademicSemeterCode;
  year: string;
  startMonth: TMonths;
  endMonth: TMonths;
};

export type TAcademicSemesterNameCodeMapper = {
  [key in TAcademicSemesterName]: TAcademicSemeterCode;
};
