import React, { useState } from "react";
import axios from "axios";
function MyComp() {
  const [name, setName] = useState("Sujan");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("Enter Some Instruction.");
  const [payment, setPayment] = useState("visa");
  const [shipping, setShipping] = useState("Delivery");
  const [order, setOrder] = useState(" n/a");

  const data = {
    name: name,
    quantity: quantity,
    comment: comment,
    shipping: shipping,
  };

  function handleFunc1(event) {
    setName(event.target.value);
    onDetailChange();
  }
  function handleFunc2(event) {
    setQuantity(event.target.value);
    onDetailChange();
  }
  function handleFunc3(event) {
    setComment(event.target.value);
    onDetailChange();
  }

  function funcHandlePayment(event) {
    setPayment(event.target.value);
    onDetailChange();
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
    onDetailChange();
  }

  function onDetailChange() {
    setOrder(JSON.stringify(data, null, 2));
  }
  async function onFormSubmit() {
    setOrder(JSON.stringify(data, null, 1));
    console.log(order);
  }

  return (
    <>
      <form>
        <input onChange={handleFunc1} value={name} type="text" />
        <p>Name: {name}</p>
        <input onChange={handleFunc2} value={quantity} min={1} type="number" />
        <p>Quantity: {quantity}</p>
        <textarea
          onChange={handleFunc3}
          placeholder={comment}
          name=""
        ></textarea>
        <p>Coment: {comment}</p>
        <select value={payment} onChange={funcHandlePayment}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment:{payment}</p>
        <label>
          <input
            type="radio"
            value="Pick UP"
            checked={shipping === "Pick UP"}
            onChange={handleShippingChange}
          />
          Pick Up
        </label>
        &nbsp;&nbsp;
        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>
        <p>Shipping:{shipping}</p>
        <input type="button" value="Submit" onClick={onFormSubmit} />
      </form>
      <hr />
      <div>
        <p>Order Details:{order}</p>
      </div>
    </>
  );
}

export default MyComp;
