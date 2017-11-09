#pragma strict

public var vel : float = 15.0f;
public var velAir : float = 15.0f;
public var accAir : float = 1.0f;
public var jump : float = 15.0f;

private var colliding : boolean = false;
private var rb : Rigidbody;
private var jumpDirection : Vector3;

private var jumpedTwice : boolean = false;

function Start (){
	rb = GetComponent.<Rigidbody>();
	rb.maxAngularVelocity = vel;
}

function Update (){
    if(colliding)    {
        // Movimiento en el suelo
		if (Input.GetKey (KeyCode.A))		{
			rb.angularVelocity.z = vel;
		}
		else if (Input.GetKey (KeyCode.D))		{
			rb.angularVelocity.z = -vel;
		}
		else		{
			rb.angularVelocity.z = 0;
		}
	}
	else	{
		// Movimiento en el aire
		if (Input.GetKey(KeyCode.A) && rb.velocity.x > -velAir)		{
			rb.velocity.x += -accAir * Time.deltaTime;
		}
		else if (Input.GetKey(KeyCode.D) && rb.velocity.x < velAir)		{
			rb.velocity.x += accAir * Time.deltaTime;
		}
	}

	if(Input.GetKeyDown(KeyCode.Space))	{
		if(colliding)		{
			jumpedTwice = false;
			Jump();
		}
		else		{
			jumpDirection = Vector3.zero; // Vector3(0,0,0)

			// Aire
			if(!jumpedTwice)			{
				jumpedTwice = true;
				Jump();
			}
		}
	}
}

function Jump(){
	rb.velocity += jumpDirection * jump * 0.7f;
	rb.velocity.y = jump;
}

function OnCollisionStay (col : Collision){
	colliding = true;
	if (col.contacts.length > 0)	{
		jumpDirection = col.contacts[0].normal;
		jumpDirection.Normalize();
	}
}

function OnCollisionExit (col : Collision){
	colliding = false;
}