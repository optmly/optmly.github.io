# 100 Prisoners, Cycle Following, and Rearrangement on Lattices 

## The 100 Prisoners Problem 
One hundred prisoners are about to be executed the next day. Their guards, feeling sorry for them
or just being playful, offer them a way out with but they must win a seemingly impossible challenge. 
Each prisoner is assigned a unique number between 1 and 100. In a windowless room, cards with 
numbers 1 to 100 are randomly placed in 100 closed drawers labeled from 1 to 100, one in each drawer. 

The 100 prisoners will be let into the room, one by one. A prisoner in the room is allowed to open 
50 drawers and look at the number on the cards in these drawers, with the goal to find a card with 
the number that matches their own. When a prisoner leaves, the room is reset to be identical before
the prisoner comes in. The prisoners may devise a strategy but may not communicate after exiting the
room. They will only be set free if all prisoners can correctly find their numbers. What are their 
chances? 

Now, if you would like to think about the problem a bit more, you should stop reading. The answer to 
the 100 prinsoners will not be revealed here (you can find it readily via a google search), but an 
important clue will be.

## Cycle Following 

Let us place $n$ numbers $1, \ldots, n$, in a row, from left to write, with a random ordering. We may 
represent this random ordering as a permtuation $\pi$, e.g., $\pi(1)$ is the number at the left most,
$\pi(2)$ is the number just to the right of $\pi(1)$, and so on. Suppose these numbers are written on 
cards that are facing down. We can find the card with number $1$ on it by doing the following. We 
check the left most card, which has number $\pi(1)$. If $\pi(1) = 1$, we are done; otherwise, we check
card $\pi(1)$ from left. What will happen as we keep doing this? We must find the card with $1$ written
on it. This yields a _cycle_ containing $1$ and possibly more numbers. For $n$ numbers that are randomly 
shuffled, there are about $\log n$ such cycles, which means that each cycle is of size $n/\log n$. This
fact turns out to be the key for the 100 prisoners to have a decent chance of survival. 

## Rearrangement on Lattices

The cycle-following procedure sketched above also applies to solving robotic rearrangement problems on 
lattices. 
In the most basic setup, **LOR** (**L**abeled **O**ne-dimensional **R**earrangement), the items are stored 
in a line at integer locations, out of order, and must be sorted, for example:

![lor](https://user-images.githubusercontent.com/23622170/120925830-6ec2d600-c6a8-11eb-922a-9e461c318255.png)

## Jingjin Yu ([arxiv preprint](https://arxiv.org/abs/2105.05366), R:SS 2021)

Here, it is assumed that the robot end-effector initially rests at the leftmost end. It can pick up objects, 
move around, and make object swaps. The goal is to minimize the time it takes to complete the rearrangement 
task, assuming that each pick-n-swap operation takes a fixed amount of time and the robot end-effector travel 
time is proportional to end-effector travel distance (as measured by some distance metric). We assume that 
the pick-n-swap operation is more costly, yielding a sequential optimization problem. A solution, when 
executed, looks like the following: 

 <video src="https://user-images.githubusercontent.com/23622170/120925809-518e0780-c6a8-11eb-9931-5f97f4c119ca.mp4" data-canonical-src="https://user-images.githubusercontent.com/23622170/120925809-518e0780-c6a8-11eb-9931-5f97f4c119ca.mp4" controls="controls" muted="muted" class="d-block rounded-bottom-2 width-fit" style="max-height:640px;">
</video>


For one dimension, partially-labeled setting is also interesting; we call this the **POR** (**P**artially-labeled **O**ne-dimensional **R**earrangement) problem. In a partially-labeled problem, items of the same type/color are interchangeable. An example POR instance is as follows: 

![por](https://user-images.githubusercontent.com/23622170/120927745-f2cc8c00-c6af-11eb-8a20-a74d3e217e80.png)

An animated solution for POR looks like:

<video src="https://user-images.githubusercontent.com/23622170/120927857-55be2300-c6b0-11eb-99ad-65a574035edf.mp4" data-canonical-src="https://user-images.githubusercontent.com/23622170/120927857-55be2300-c6b0-11eb-99ad-65a574035edf.mp4" controls="controls" muted="muted" class="d-block rounded-bottom-2 width-fit" style="max-height:640px;">
</video>
  
The rest two of the four problems are two-dimensional versions of LOR and POR, whare are named as **LTR** and **PTR**. Animated solutions, which also demonstrate the problem setup, are given below. 

<video src="https://user-images.githubusercontent.com/23622170/120928336-4213bc00-c6b2-11eb-8f30-cc0ef23b4981.mp4" data-canonical-src="https://user-images.githubusercontent.com/23622170/120928336-4213bc00-c6b2-11eb-8f30-cc0ef23b4981.mp4" controls="controls" muted="muted" class="d-block rounded-bottom-2 width-fit" style="max-height:640px;">
</video>


## Dependencies

The code base is written in Python and tested under v3.8.3. It has dependencies on numpy, scipy, and networkx. These should be installed with pip

`> pip install numpy scipy networkx`

## Usage

The four main solvers are named *_solvers.py, where * corresponds to LOR, POR, LTR, PTR. Each file has a default demo that works with a randomly generated problem instance. For example, running 

`> python lor_solver.py`

will produce something like 


```
LOR instance: [2, 7, 3, 0, 14, 5, 1, 11, 13, 6, 9, 4, 12, 8, 10, 15]

# of pick-n-swaps: 16, optimal distance: 56, cycle sweep distance: 72

Optimal rearrangement plan:
 [-1, 0, 1, 7, 8, 13, 8, 11, 4, 14, 10, 9, 6, 1, 2, 3, 0]

Cycle sweep rearrangement plan:
 [-1, 0, 2, 3, 0, 1, 7, 11, 4, 14, 10, 9, 6, 1, 8, 13, 8]
 ```

which contains the randomly generated instance, the optimal number of pick-n-swaps, the optimal end-effector travel distance, and the distance incurred by a cycle-sweeping algorithm. The plans from both algorithms are also given. To interpret the plan, "-1" indicates the end-effector at rest. The other numbers are cell labels. So, for the plan  [-1, 0, 1, 7, 8, 13, 8, 11, 4, 14, 10, 9, 6, 1, 2, 3, 0], the end-effector first travels to cell 0 (and picks up an item there), then cell 1, 7, 8, and so on. It is clear whether the operation at a given cell location is a pick, drop, or pick-n-swap. The same intepretation applies to other solvers. For the 2D solvers, the cells should be interpreted based on column-major ordering (see the paper). 



