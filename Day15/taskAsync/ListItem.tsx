import React from "react";

type Props = {
  Item: any;
};

export default function ListItem(props: Props) {
  const repo = props.Item;
  return <li>{repo}</li>;
}
