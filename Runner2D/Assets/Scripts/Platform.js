#pragma strict

public var coinPrefab : GameObject;

@Range(0.0f, 1.0f)
public var coinProb : float = 0.5f;
public var coinRange : float = 2.0f;
public var yOffset : float = 1.25f;


function Start () {
	if (Random.value <= coinProb) {
		var platPos : Vector3 = transform.position;
		var xOffset : float = Random.Range(-coinRange, coinRange);
		var coinPos : Vector3 = Vector3(platPos.x + xOffset, platPos.y + yOffset, platPos.z);

		Instantiate(coinPrefab, coinPos, transform.rotation);
	}
}