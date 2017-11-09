#pragma strict

public var bulletSpeed : float = 5.0f;
public var rateOfFire : float = 2.0f;
public var bulletPrefab : GameObject;

private var seeingPlayer : boolean = false;
private var time : float = 0.0f;
private var player : GameObject;
private var dist : float = 1.0f;


/*
	Encuentra al jugador en la jerarquía
*/
function Start () {
	player = GameObject.Find("Player");
}

/*
	Busca al jugador y le lanza un rayo/laser/apuntador (Raycast). Si colisiona con el Player, quiere decir 
	que lo puede ver, y viceversa. 
*/
function Update () {
	transform.LookAt(player.transform);
	var hitInfo : RaycastHit;
	if (Physics.Raycast(transform.position, transform.forward, hitInfo))	{
		if(hitInfo.collider.gameObject.CompareTag("Player")) {
			seeingPlayer = true;
			dist = hitInfo.distance;
			Debug.Log("DIST = " + rateOfFire/dist);
		}
		else seeingPlayer = false;
	}

	//Si ve al jugador, el cañón se pone en verde. En caso contrario, se pone en azul.

	var mrs:MeshRenderer[] = GetComponentsInChildren.<MeshRenderer>();
	for (var i:int = 0; i < mrs.length; ++i) {
		 if(seeingPlayer) mrs[i].material.color = Color.green;
		 else mrs[i].material.color = Color.blue;
	}

	/*
		Dispara una mina, de la misma forma que en el FPS del dia 1.
	*/
	time += Time.deltaTime;
	if(time > (rateOfFire - rateOfFire/dist) && seeingPlayer)	{
		
		time = 0.0f;
		var instantiatedBullet : GameObject = GameObject.Instantiate(bulletPrefab, transform.position, transform.rotation);
		for (i = 0; i < mrs.length; ++i)  mrs[i].material.color = Color.green;
		var rb : Rigidbody = instantiatedBullet.GetComponent.<Rigidbody>();
		rb.velocity = transform.forward * bulletSpeed;
	}
}