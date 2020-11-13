build:
	$(foreach dir, $(wildcard */.), $(MAKE) -C $(dir) build;)