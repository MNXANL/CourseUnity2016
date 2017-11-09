#pragma strict

private var t : float = 0.0f;
private var ActivateBomb : boolean = false;

function Start () {
}

function Update() {
	if (ActivateBomb) {
		transform.localScale = Vector3.Lerp(transform.localScale, Vector3(1, 2, 1), Time.deltaTime);
		//	//	//	//	//	//	//	// Lerp(Origen, Destino, Velocidad entre origen y destino);

		//transform.color = Vector3.Lerp(Color.white, Color.red, Time.deltaTime);
	}
}

function OnCollisionEnter (col : Collision) {
	if (col.gameObject.CompareTag("Player")) {
		ActivateBomb = true;

	}
}