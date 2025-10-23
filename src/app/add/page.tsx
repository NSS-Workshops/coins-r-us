"use client";
import React, { useState } from "react";
import { Box, Button, TextField, Flex } from "@radix-ui/themes";
import * as Label from "@radix-ui/react-label";

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
    setSubmitted(true);
  };

  return (
    <Box maxWidth="400px">
      <form onSubmit={handleSubmit}>
        <Flex direction="column" gap="3">
          <Label.Root htmlFor="denomination">Denomination</Label.Root>
          <TextField.Root id="denomination" name="denomination" value={form.denomination} onChange={handleChange} />

          <Label.Root htmlFor="year">Year</Label.Root>
          <TextField.Root id="year" name="year" value={form.year} onChange={handleChange} />

          <Label.Root htmlFor="location">Location</Label.Root>
          <TextField.Root id="location" name="location" value={form.location} onChange={handleChange} />

          <Label.Root htmlFor="condition">Condition</Label.Root>
          <TextField.Root id="condition" name="condition" value={form.condition} onChange={handleChange} />

          <Label.Root htmlFor="price">Price</Label.Root>
          <TextField.Root id="price" name="price" value={form.price} onChange={handleChange} />

          <Button type="submit" variant="solid" size="3">Add Coin</Button>
        </Flex>
      </form>
      {submitted && <p>Coin added. (This is a placeholder; hook up to backend as needed.)</p>}
    </Box>
  );
}

