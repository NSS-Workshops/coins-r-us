"use client";
import React, { useState } from "react";
import styled, { useTheme } from "styled-components";
import * as Label from "@radix-ui/react-label";

const FormWrapper = styled.div`
  max-width: 420px;
  margin: 40px auto;
  border-radius: 16px;
  padding: 32px 24px;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
const StyledLabel = styled(Label.Root)`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 6px;
`;
const StyledInput = styled.input`
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px solid #C0C0C0;
  font-size: 1rem;
  background: #fff8e1;
  color: #333;
  outline: none;
  &:focus {
    border-color: #FFD700;
    box-shadow: 0 0 0 2px #FFD70044;
  }
`;
const StyledButton = styled.button`
  font-weight: 700;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  margin-top: 12px;
  cursor: pointer;
  transition: background 0.2s;
  &:hover {
    background: #b0b0b0;
  }
`;

export default function AddCoinPage() {
  const [form, setForm] = useState({
    denomination: "",
    year: "",
    location: "",
    condition: "",
    price: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send to json-server
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
    setForm({ denomination: "", year: "", location: "", condition: "", price: "" });
  };

  return (
    <FormWrapper>
      <h2>Add a Coin</h2>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledLabel htmlFor="denomination">Coin denomination</StyledLabel>
          <StyledInput
            id="denomination"
            name="denomination"
            value={form.denomination}
            onChange={handleChange}
            required
            placeholder="e.g. Quarter, Dime, etc."
          />
        </div>
        <div>
          <StyledLabel htmlFor="year">Coin minting year</StyledLabel>
          <StyledInput
            id="year"
            name="year"
            type="number"
            min="1500"
            max={new Date().getFullYear()}
            value={form.year}
            onChange={handleChange}
            required
            placeholder="e.g. 1923"
          />
        </div>
        <div>
          <StyledLabel htmlFor="location">Coin minting location</StyledLabel>
          <StyledInput
            id="location"
            name="location"
            value={form.location}
            onChange={handleChange}
            required
            placeholder="e.g. Philadelphia"
          />
        </div>
        <div>
          <StyledLabel htmlFor="condition">Coin condition</StyledLabel>
          <StyledInput
            id="condition"
            name="condition"
            value={form.condition}
            onChange={handleChange}
            required
            placeholder="e.g. MS-65, Good, etc."
          />
        </div>
        <div>
          <StyledLabel htmlFor="price">Price</StyledLabel>
          <StyledInput
            id="price"
            name="price"
            type="number"
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            required
            placeholder="e.g. 150.00"
          />
        </div>
        <StyledButton type="submit">Add Coin</StyledButton>
        {submitted && <div style={{ color: theme.colors.font, textAlign: "center", marginTop: 8 }}>Coin added!</div>}
      </StyledForm>
    </FormWrapper>
  );
}

