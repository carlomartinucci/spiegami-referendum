import React from 'react';
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List';


export default class Theorem {
	constructor(claim, connector, reasons) {
		this.reasons = reasons;
		this.connector = connector;
		this.claim = claim;
	}
	get getClaim() {
		return this.claim || this.reasons.map((th) => th.getClaim).join(' ' + this.connector + ' ');
	}
	get preview() {
		return this.reasons.map((th) => th.getClaim).join(' ' + this.connector + ' ');
	}
	get human_count_or() {
		return "per " + this.reasons.length + (this.reasons.length === 1 ? " motivo" : " motivi");
	}
	get human_count_and() {
		return "per il seguente motivo, in " + this.reasons.length + (this.reasons.length === 1 ? " punto" : " punti");
	}
	get human_count_how() {
		return (this.reasons.length === 1 ? "nel seguente modo" : "nei seguenti " + this.reasons.length + " modi");
	}
}


export function theoremToMaterial(theorem) {
	if (theorem.reasons.length === 0) {
		return (
			<ListItem
				key={theorem.claim}
				primaryText={theorem.claim}
			/>
		)
	} else if (
		theorem.connector === "o" &&
		!theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		return (
			<List>
				{listItems}
			</List>
		)
	} else if (
		theorem.connector === "o" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		return (
					<ListItem
						key={theorem.claim}
						primaryText={theorem.claim}
						secondaryText={theorem.human_count_or}
						primaryTogglesNestedList={true}
						nestedItems={listItems}
						innerDivStyle={{paddingRight: 48}}
					/>
		)
	} else if (
		theorem.connector === "e" &&
		!theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		const paperItems = listItems.map((item) => (
			item.type === List ? 
				<Paper>{item}</Paper> :
				<Paper><List>{item}</List></Paper>
			)
		)
		return (
			<ListItem key={theorem.claim}>
				{paperItems}
			</ListItem>
		)
	} else if (
		theorem.connector === "e" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		const paperItems = listItems.map((item, index) => <Paper key={index}><List>{item}</List></Paper>)
		return (
			<ListItem
				key={theorem.claim}
				primaryText={theorem.claim}
				secondaryText={theorem.human_count_and}
				primaryTogglesNestedList={true}
				nestedItems={[<ListItem key={1}>{paperItems}</ListItem>]}
				innerDivStyle={{paddingRight: 48}}
			/>
		)
	} else if (
		theorem.connector === "in_che_modo" &&
		theorem.claim
	) {
		const listItems = theorem.reasons.map(theoremToMaterial)
		return (
					<ListItem
						key={theorem.claim}
						primaryText={theorem.claim}
						secondaryText={theorem.human_count_how}
						primaryTogglesNestedList={true}
						nestedItems={listItems}
						innerDivStyle={{paddingRight: 48}}
					/>
		)
	}

}

export function jsonToTheorem(json) {
	const claim = json.claim ? json.claim : "";
	const connector = json.connector ? json.connector : "";
	const reasons = json.reasons ? json.reasons.map(jsonToTheorem) : []
	return new Theorem(claim, connector, reasons)
}

export function jsonToMaterial(json) {
	return (
		<Paper>
			<List>
				{theoremToMaterial(jsonToTheorem(json))}
			</List>
		</Paper>
	)
}

export function argumentsFromTopic(topic) {
	var argomenti = {}

	function onlyUnique(value, index, self) {
		return self.indexOf(value) === index
	}
	Object.keys(topic).forEach( (tema) => {
		var argomenti_del_tema = Object.keys(topic[tema])
		argomenti_del_tema = argomenti_del_tema.map((argomento) => argomento.replace("_SI", "").replace("_NO",""))
		argomenti_del_tema = argomenti_del_tema.filter(onlyUnique)
		argomenti[tema] = argomenti_del_tema
	})
	return argomenti
}