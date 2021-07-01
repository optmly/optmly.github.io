In nearly all aspects of our everyday lives, be it work related, at home, or for 
play, objects are to be grasped and rearranged, e.g., tidying up a messy desk, 
cleaning the table after dinner, or solving a jigsaw puzzle. Similarly, many
industrial and logistics applications require repetitive rearrangements of many 
objects, e.g., the sorting and packaging of products on conveyors with robots, 
and doing so efficiently is of critical importance to boost the competitiveness 
of the stakeholders. However, even without the challenge of grasping, **deciding 
the sequence of objects for optimally solving a rearrangement task** is non-trivial. 

For the example below, perhaps we want to arrange the sodas from the configuraiton 
on the left to the neater configuration on the right (the order between coke and 
pepsi does reflect my personal preference :D). Let us assume the robot will use 
overhand grasps: it will pick up an object, lift it above all other objects, 
move it around, and drop it off at a place on the table that is collision-free. 
A natural question to ask here is, how many such pick-n-place operations are 
needed to solve a given problem? 

In solving the problem, we first make the following observation: the coke occupies 
the pepsi's goal and vice versa, which means that one of them must be moved to 
a temporary location before the problem can be solved. This creates a **two-way** 
constraint. The coke also occupies the goal of the fanta, but this constraint is a 
**one-way** constraint. From the observation, we may capture the constraints in 
the rearrangement problem using **dependency graphs**, as shown on the right side 
of the figure below. Dependency graphs can be computed easily by extracting the 
the pairwise object constraints. 

The above dependency graph structure is induced by labeled objects. When the 
objects are unlabeled, dependency graphs can also be defined. In this case, 
the dependency graphs are undirected and bipartite. 

As it turns out, minimizing the **total number** of objects to place at temporary 
locations, or **buffers**, is a difficult problem to solve at scale, because it is 
essentially the same as the *feedback vertex set* problem on the corresponding 
dependency graph, which is one of the 
[first batch of problems proven to be NP-hard](https://en.wikipedia.org/wiki/Karp%27s_21_NP-complete_problems).
This aspect of the tabletop rearrangement problem is studied by 
[Han et al.](https://journals.sagepub.com/doi/pdf/10.1177/0278364918780999)
a few years back. 

Here, we are interested in a related optimization objective. Instead of the 
**total number** of buffers, what about the minimum number of buffers that are 
currently being used? That is, how many **running buffers** are needed to solve 
a given tabletop rearrangement problem? This is an important question to ask, 
because the number of running buffers is more relevant than the number of 
total buffers in deciding the feasibility of solving a given problem. In a recent 
work at R:SS 2021, we 




We may 
