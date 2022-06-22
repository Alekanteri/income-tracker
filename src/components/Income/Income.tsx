import React, { useState, useRef, useEffect } from "react";
import styles from "./Income.module.scss";

const Income: React.FC = () => {
  const [income, setIncome] = useState<Array<any>>([]); //Fix type in the future.
  const [totalIncome, setTotalIncome] = useState<number>(0);

  const description = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);

  const IncreaseIncome = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let curDate = date.current!.value.split("-");
    let newDate = new Date(Number(curDate[0]), Number(curDate[1]), Number(curDate[2]));

    setIncome([
      ...income,
      {
        description: description.current?.value,
        price: price.current?.value,
        date: newDate.getTime(),
      },
    ]);
  };

  useEffect(() => {
    let temp: number = 0;
    for (let i = 0; i < income.length; i++) {
      temp += parseInt(income[i].price);
    }
    setTotalIncome(temp);
  }, [income]);

  return (
    <div className={styles.IncomeBody}>
      <h1>Income counter: ${totalIncome}</h1>
      <div className={styles.IncomeContainer}>
        <form className={styles.FormContainer} onSubmit={IncreaseIncome}>
          <div className={styles.FormInner}>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Description"
              ref={description}
            />
            <input
              type="number"
              name="price"
              id="price"
              placeholder="Price"
              ref={price}
            />
            <input type="date" name="date" id="date" ref={date} />
            <input type="submit" value="Income" />
          </div>
        </form>
        <div className={styles.IncomeList}>
          {income.map((elem) => (
            <div className={styles.ListItem}>
              <div><b>{elem.description}</b></div>
              <div>{elem.price} $</div>
              <div>{`${new Date(elem.date).getDate()}/${new Date(elem.date).getMonth() + 1}/${new Date(elem.date).getFullYear()}`}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Income;
