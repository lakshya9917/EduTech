import pygame
import sys
import random

# Initialize Pygame
pygame.init()

# Constants
SCREEN_WIDTH = 900
SCREEN_HEIGHT = 600
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
FONT_SIZE = 32
TARGET_WIDTH = 150
TARGET_HEIGHT = 50

# Set up the screen
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption('Simple Shooting Game')

# Fonts
font = pygame.font.SysFont(None, FONT_SIZE)

# Target class
class Target(pygame.sprite.Sprite):
    def __init__(self, x, y, option, correct=False):
        super().__init__()
        self.image = pygame.Surface((TARGET_WIDTH, TARGET_HEIGHT))
        self.image.fill(BLACK)
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)
        self.option = option
        self.correct = correct

    def draw_option(self):
        option_text = font.render(self.option, True, WHITE)
        text_rect = option_text.get_rect(center=self.rect.center)
        screen.blit(option_text, text_rect)

# Shooter class
class Shooter(pygame.sprite.Sprite):
    def __init__(self, x, y):
        super().__init__()
        self.image = pygame.Surface((50, 50))
        self.image.fill((255, 0, 0))
        self.rect = self.image.get_rect()
        self.rect.center = (x, y)

# Function to display question
def display_question():
    question_text = "What does HTML stand for?"
    question_surface = font.render(question_text, True, WHITE)
    screen.blit(question_surface, (SCREEN_WIDTH // 2 - question_surface.get_width() // 2, 50))

# Main function
def main():
    clock = pygame.time.Clock()
    FPS = 60

    targets = pygame.sprite.Group()
    shooter = Shooter(SCREEN_WIDTH // 2, SCREEN_HEIGHT - 50)

    # Create targets with options
    target_options = ["Hypertext Markup Language", "Hypertext Makeup Language", "Hypertension Markup Language", "Hypertext Medium Language"]
    correct_option = random.choice(target_options)
    random.shuffle(target_options)

    for i, option in enumerate(target_options):
        correct = option == correct_option
        target = Target(150 * (i + 1), SCREEN_HEIGHT - 150, option, correct)
        targets.add(target)

    running = True
    score = 0
    while running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                running = False
                pygame.quit()
                sys.exit()
            elif event.type == pygame.MOUSEBUTTONDOWN:
                mouse_pos = pygame.mouse.get_pos()
                for target in targets:
                    if target.rect.collidepoint(mouse_pos):
                        if target.correct:
                            score += 1
                            print("Correct!")
                        else:
                            print("Incorrect!")

        screen.fill(BLACK)

        display_question()

        targets.draw(screen)
        for target in targets:
            target.draw_option()

        screen.blit(shooter.image, shooter.rect)

        pygame.display.flip()

        clock.tick(FPS)

if __name__ == "__main__":
    main()

