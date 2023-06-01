

export default function convertInputToObject(input){
  const result= [];

  input.forEach((obj) => {
    const [date, cases] = Object.entries(obj)[0];
    result.push({ date, cases });
  });

  return result;
}