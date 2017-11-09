#pragma strict

public var enemy: GameObject;
public var period : float = 1.0;

private var time : float = 0.0;

function Update () {
	time += Time.deltaTime;
	Debug.Log(time);
	if (time > period) {
		time = 0;

		var offsetX : float = Random.Range(-4.0f, 4.0f);
		var offsetY : float = Random.Range(0.0f, 4.0f);
		var position : Vector3 = transform.position + Vector3(offsetX, offsetY, 0.0f);
		
		var instantiatedEnemy : GameObject = GameObject.Instantiate(enemy, position, Quaternion());
	}
}