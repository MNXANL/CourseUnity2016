#pragma strict

public var Doors : GameObject[];

private var time:float = 3.0f;


function Start () {

}

function Update () {
}

function OnTriggerEnter(col:Collider) {
	if (col.gameObject.CompareTag("Player")) {
	// Desactiva cada puerta
		for (var i:int = 0; i < Doors.length; ++i) {
			var door : GameObject = Doors[i];
			door.SetActive(false); //ALTERNATIVA: Destroy(door, time); // Destroy(door);
		}
	}
}

function OnDrawGizmos() {
	Gizmos.color = Color.green;
	for (var door : GameObject in Doors) {
		Gizmos.DrawLine(transform.position, door.transform.position);
	}
}