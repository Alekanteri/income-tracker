import React, { useState, useRef, useEffect } from "react";
import styles from "./Extends.module.scss";

const Extends: React.FC<any> = ({AddExtend}: any) => {
  const [extend, setExtend] = useState<Array<any>>([]); //Fix type in the future.
  const [totalExtend, setTotalExtend] = useState<number>(0);

  const description = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const date = useRef<HTMLInputElement>(null);

  const DecDifferent = (value: number) => {
    AddExtend(value)
  }

  const IncreaseExtend = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    let curDate = date.current!.value.split("-");
    let newDate = new Date(Number(curDate[0]), Number(curDate[1]), Number(curDate[2]));

    setExtend([
      ...extend,
      {
        description: description.current?.value,
        price: price.current?.value,
        date: newDate.getTime(),
      },
    ]);
  };

  useEffect(() => {
    let temp: number = 0;
    for (let i = 0; i < extend.length; i++) {
      temp += parseInt(extend[i].price);
    }
    setTotalExtend(temp);
    DecDifferent(temp)
  }, [extend]);

  return (
    <div className={styles.ExtendBody}>
      <h1>Extend counter: ${totalExtend}</h1>
      <div className={styles.ExtendContainer}>
        <form className={styles.FormContainer} onSubmit={IncreaseExtend}>
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
            <input type="submit" value="Extend" />
          </div>
        </form>
        <div className={styles.ExtendList}>
          {extend.map((elem) => (
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

export default Extends;
